<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs'
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle += '!'
        }
    },
    beforeCreate() {
        alert('beforeCreate hook')
    },
    created() {
        alert('created hook')
    },
    beforeUpdate() {
        console.log('beforeUpdate hook')
    }
}
</script>