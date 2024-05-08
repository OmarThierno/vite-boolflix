<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div v-for="film in store.movieArr" class="col">
                    <div>{{ film.original_title }}</div>
                    <div>{{ film.original_language }}</div>
                    <div>{{ film.vote_average }}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>