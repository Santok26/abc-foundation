(() => {

    const DEFAULT_LANG = "en";
    const STORAGE_KEY = "abc-lang";

    async function loadLang(lang) {

        try {

            const res = await fetch("i18n/" + lang + ".json");

            if (!res.ok) throw new Error("missing");

            return await res.json();

        } catch (e) {

            console.warn("Language load failed:", lang);

            return {};

        }

    }

    function translate(dict) {

        document.querySelectorAll("[data-i18n]").forEach(el => {

            const key = el.dataset.i18n;

            if (dict[key]) el.textContent = dict[key];

        });

    }

    async function setLanguage(lang) {

        const base = await loadLang(DEFAULT_LANG);
        const selected = lang === DEFAULT_LANG ? {} : await loadLang(lang);

        const merged = { ...base, ...selected };

        translate(merged);

        localStorage.setItem(STORAGE_KEY, lang);

        document.documentElement.lang = lang;

        document.querySelectorAll(".language-switcher")
            .forEach(el => el.value = lang);

    }

    document.addEventListener("DOMContentLoaded", () => {

        const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;

        setLanguage(saved);

        document.querySelectorAll(".language-switcher")
            .forEach(select => {

                select.addEventListener("change", e => {

                    setLanguage(e.target.value);

                });

            });

    });

})();