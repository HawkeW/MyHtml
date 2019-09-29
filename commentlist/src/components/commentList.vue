<template>
  <li>
    <p>ID: {{content.id}} 时间:{{content.time}}</p>
 
    <p class="comment">{{content .comment}}</p>
  </li>
</template>

<script>
export default {
  name: "commentList",
  props: ["content"],
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  list-style: none;

}
.comment{
  background: #aaa;
  border-radius: 5px;
  padding:2px 5px;
}
</style>
