const { createApp } = Vue;

const API_URL = 'https://fakerapi.it/api/v2/persons?_quantity=10';
const FALLBACK_IMG = 'https://via.placeholder.com/640x480?text=No+Image';

createApp({
  data() {
    return {
      people: [],
      loading: true,
      error: null
    };
  },
  methods: {
    avatarFrom(p) {
      // stabiler Avatar (immer verfügbar)
      const seed = p?.email || p?.uuid || `${p?.firstname || ''}${p?.lastname || ''}` || Math.random();
      return `https://i.pravatar.cc/640?u=${encodeURIComponent(seed)}`;
    },
    normalizeImg(p) {
      // 1) API-Bild, falls vorhanden & http(s)
      if (p?.image && /^https?:\/\//i.test(p.image)) return p.image;
      // 2) Generierter Avatar
      return this.avatarFrom(p);
    },
    async fetchPeople() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        const list = Array.isArray(json?.data) ? json.data : [];
        this.people = list.map(p => ({
          name: `${p.firstname} ${p.lastname}`.toUpperCase(),
          img: this.normalizeImg(p),
          desc: p.email
            ? `Kontakt: ${p.email}`
            : (p.website ? `Website: ${p.website}` : 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam amet eu turpis. Nunc laoreet augue dignissim suspendisse.')
        }));
      } catch (e) {
        console.error(e);
        this.error = 'Konnte Personen nicht laden.';
      } finally {
        this.loading = false;
      }
    },
    onImgErr(e) {
      // Wenn ein Bild trotzdem nicht lädt, Avatar → Fallback
      const current = e.target.src || '';
      if (!current.includes('i.pravatar.cc')) {
        e.target.src = `https://i.pravatar.cc/640?u=${encodeURIComponent(Date.now())}`;
      } else {
        e.target.src = FALLBACK_IMG;
      }
      e.target.onerror = null;
    }
  },
  mounted() {
    this.fetchPeople();
  }
}).mount('#app');
