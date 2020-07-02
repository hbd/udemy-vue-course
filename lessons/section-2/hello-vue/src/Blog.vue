<template>
    <div class="blogs">
        <h2>Blog Posts</h2>
        <div v-for="(post, index) in posts" :key="index">
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
            posts: []
        }
    },
    methods: {
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