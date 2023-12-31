import { useAuthStore } from "../store/auth/authStore";
import { useGenreStore } from "../store/genresStore";
import { mapActions } from "pinia";

export const mixinStart = {
    methods: {
        ...mapActions(useAuthStore, ["onAuth"]),
        ...mapActions(useGenreStore, ["getgenres"]),
    },
    created() {
        this.getgenres();
        this.onAuth();
    },
};
