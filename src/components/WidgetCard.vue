<template>
  <div class="widget-card">
    <div class="icon">{{ icon }}</div>
    <div class="details">
      <p class="title">{{ title }}</p>
      <h2 class="value">{{ value }}</h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// กำหนด Props ที่คอมโพเนนต์นี้จะรับเข้ามา
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String, // เช่น '💰', '🧑‍💻'
    default: '⭐'
  }
});
</script>

<style scoped>
.widget-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.2s;
}

.widget-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 2em;
}

.details {
  display: flex;
  flex-direction: column;
}

.title {
  margin: 0;
  color: #7f8c8d;
  font-size: 0.9em;
}

.value {
  margin: 0;
  font-size: 1.8em;
  font-weight: 600;
  color: #2c3e50;
}
</style>