<template>
  <div class="user-list">
    <h2>Users</h2>
    <div class="user-card" v-for="user in users" :key="user.email">
      <img :src="user.picture.medium" :alt="user.name.first" />
      <h3>{{ user.name.first }} {{ user.name.last }}</h3>
      <p>{{ user.email }}</p>
    </div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const loading = ref(false);
let page = 1;

const fetchUsers = async () => {
  loading.value = true;
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=30&page=${page}`);
    users.value = [...users.value, ...response.data.results];
    page++;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false;
  }
};

const handleScroll = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !loading.value) {
    fetchUsers();
  }
};

onMounted(() => {
  fetchUsers();
  window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}
.user-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
}
.loading {
  text-align: center;
  width: 100%;
  margin-top: 20px;
}
</style>
