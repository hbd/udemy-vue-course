<template>
    <div class="blogs">
        <h2>Blog Posts</h2>
        <input type="text" v-model="searchTerm">
        <div v-for="post in filteredPosts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blog',
    data() {
        return {
            posts: [],
            searchTerm: ''
        }
    },
    methods: {
    },
    computed: {
        // Allows us to use filteredPosts as a data source.
        filteredPosts() {
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data[0])
            this.posts = response.data
        }).catch(err => {
            console.log("Error occured making request to get posts: ", err)
        })
    }
}
</script>