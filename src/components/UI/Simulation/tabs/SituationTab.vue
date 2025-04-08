<template>
  <div>
    <div class="role-section">
      <h2 class="section-title">
        ROLE
      </h2>

      <div class="role-container">
        <div class="role-item">
          <div class="avatar manager" />
          <h3>Manager</h3>
          <p>Finance Manager</p>
        </div>

        <div class="role-item">
          <div class="avatar teamleader" />
          <h3>Teamleader</h3>
          <p>Senior Financial Analyst</p>
        </div>

        <div class="role-item">
          <div class="avatar-group">
            <div class="avatar peer1" />
            <div class="avatar peer2" />
          </div>
          <h3>You/your peer</h3>
          <p>Financial Analyst</p>
        </div>
      </div>
    </div>

    <div class="scope-section">
      <h2 class="section-title">
        SCOPE OF WORK
      </h2>

      <div class="scope-list">
        <ul>
          <li>Lead and oversee financial analysis, reporting, and budgeting</li>
          <li>Ensure accurate financial modeling, forecasting</li>
          <li>Collaborate with cross-functional teams to provide financial insights</li>
        </ul>

        <ul>
          <li>Lead and coordinate a team of analysts in preparing financial reports</li>
          <li>Ensure timely and accurate financial reporting</li>
          <li>Assist in the development of financial models and forecasts.</li>
        </ul>

        <ul>
          <li>Assist in the preparation of financial reports, forecasts</li>
          <li>Perform data analysis and create financial models under the guidance of senior analysts.</li>
          <li>Help in compiling financial data and preparing presentations.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
    font-size: 22px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
}

/* Role Styles */
.role-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}

.role-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.avatar.manager {
    background-color: #ffd54f;
}

.avatar.teamleader {
    background-color: #90caf9;
}

.avatar-group {
    display: flex;
    margin-bottom: 10px;
}

.avatar-group .avatar {
    width: 60px;
    height: 60px;
    margin: 0 -10px;
}

.avatar.peer1 {
    background-color: #81c784;
    z-index: 2;
}

.avatar.peer2 {
    background-color: #4fc3f7;
    z-index: 1;
}

.role-item h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

.role-item p {
    font-size: 14px;
    color: #666;
}

.scope-section {
    margin-top: 30px;
}

.scope-list {
    display: flex;
    justify-content: space-between;
}

.scope-list ul {
    width: 30%;
    padding-left: 20px;
}

.scope-list li {
    margin-bottom: 15px;
    line-height: 1.5;
}
</style>
