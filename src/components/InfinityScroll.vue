<template>
  <div class="user-list">
    <div class="user-cards-wrapper">
      <div class="user-card" v-for="user in users" :key="user.email">
        <img :src="user.picture.medium" :alt="user.name.first" class="user-card__image" />
        <h3>{{ user.name.first }} {{ user.name.last }}</h3>
        <p>{{ user.email }}</p>
      </div>
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

/**
 * Fetches a list of users from the Random User API and appends them to the existing list.
 * Increments the page number after a successful fetch. Handles loading state during the fetch process.
 * Logs an error message to the console if the fetch operation fails.
 */
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
  flex-direction: column;
  gap: 16px;
}

.user-cards-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 16px;
  padding-top: 32px;
}

.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.loading {
  text-align: center;
  width: 100%;
  padding: 20px;
}

.user-card__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
}
</style>
