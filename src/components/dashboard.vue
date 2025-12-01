<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="logo">Vue Dashboard</div>
      <nav class="navigation">
        <ul>
          <li><a href="#">🏠 หน้าแรก</a></li>
          <li><a href="#">📊 รายงาน</a></li>
          <li><a href="#">⚙️ การตั้งค่า</a></li>
        </ul>
      </nav>
    </aside>

    <main class="main-content">
      <header class="header">
        <h1>ภาพรวมระบบ</h1>
        <div class="user-info">สวัสดี, {{ user ? user.username : 'ผู้ดูแลระบบ' }}</div>
        <button @click="$emit('logout')" class="logout-btn">Logout</button>
      </header>
      
      <div class="widget-grid">
        <WidgetCard title="ยอดขายรวม" value="฿ 12,500" icon="💰" />

        <WidgetCard title="ผู้ใช้งานใหม่" value="45" icon="🧑‍💻" />

        <div class="full-width-card">
          <h3>กราฟข้อมูลประจำเดือน</h3>
          <p>แสดงพื้นที่สำหรับกราฟแท่งหรือกราฟเส้น</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import WidgetCard from './WidgetCard.vue';

export default {
  name: "Dashboard",
  components: {
    WidgetCard
  },
  props: {
    user: Object
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f4f7f9;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 30px;
}

.navigation ul {
  list-style: none;
  padding: 0;
}

.navigation li a {
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 0;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navigation li a:hover {
  background-color: #34495e;
}

.main-content {
  flex-grow: 1;
  padding: 20px 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.header h1 {
  margin: 0;
  color: #333;
}

.logout-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.widget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.full-width-card {
    grid-column: 1 / -1;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>