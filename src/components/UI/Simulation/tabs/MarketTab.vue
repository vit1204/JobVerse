<script setup>
import { ElCard } from 'element-plus'

const marketOverview = {
  title: 'MARKET OVERVIEW',
  description: 'The financial services industry handles money worldwide, and investment banking is a big part of it. Investment banks help companies raise cash, buy other businesses, or plan smart moves. The whole industry covers banks, insurance, stock markets, and tech apps, powering economies everywhere.',
}

const marketSize = {
  title: 'MARKET SIZE AND GROWTH',
  financialServices: {
    value: '$30.9 trillion',
    growth: '7.5%',
    target: '$37.5 trillion by 2027',
    source: 'DashDevs',
  },
  investmentBanking: {
    value: '$165.91 billion',
    growth: '13.13%',
    target: '$307.43 billion by 2030',
    source: 'Mordor Intelligence',
  },
}

const topPlayers = {
  title: 'TOP PLAYERS',
  companies: [
    {
      name: 'JPMorgan Chase (U.S.)',
      description: 'Market cap ~$600 billion.',
    },
    {
      name: 'Berkshire Hathaway (U.S.)',
      description: 'Huge in insurance.',
    },
    {
      name: 'Goldman Sachs (U.S.)',
      description: 'Tops in deals.',
    },
    {
      name: 'Morgan Stanley (U.S.)',
      description: 'Strong in wealth.',
    },
  ],
}
</script>

<template>
  <div class="market-content">
    <!-- Market Overview Section -->
    <div class="section">
      <div class="section-header">
        <!-- <img src="@/assets/icons/market-overview.svg" alt="Market Overview" class="section-icon"> -->
        <h2 class="section-title">
          {{ marketOverview.title }}
        </h2>
      </div>
      <p class="section-description">
        {{ marketOverview.description }}
      </p>
    </div>

    <!-- Market Size Section -->
    <div class="section">
      <div class="section-header">
        <!-- <img src="@/assets/icons/market-growth.svg" alt="Market Growth" class="section-icon"> -->
        <h2 class="section-title">
          {{ marketSize.title }}
        </h2>
      </div>
      <div class="market-stats">
        <div class="stat-item">
          <strong>Financial Services:</strong> Worth {{ marketSize.financialServices.value }} in 2023, expected to grow
          to {{ marketSize.financialServices.target }} ({{ marketSize.financialServices.growth }} yearly growth, {{
            marketSize.financialServices.source }}).
        </div>
        <div class="stat-item">
          <strong>Investment Banking:</strong> Its tech side is {{ marketSize.investmentBanking.value }} in 2025, set to
          hit {{ marketSize.investmentBanking.target }} ({{ marketSize.investmentBanking.growth }} growth, {{
            marketSize.investmentBanking.source }}).
        </div>
      </div>
    </div>

    <!-- Top Players Section -->
    <div class="section">
      <div class="section-header">
        <!-- <img src="@/assets/icons/top-players.svg" alt="Top Players" class="section-icon"> -->
        <h2 class="section-title">
          {{ topPlayers.title }}
        </h2>
      </div>
      <ul class="players-list">
        <li v-for="(company, index) in topPlayers.companies" :key="index">
          <strong>{{ company.name }}</strong> - {{ company.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.market-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 40px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.section-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.section-title {
  color: #1a237e;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.section-description {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.market-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-item {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.players-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.players-list li {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

strong {
  color: #1a237e;
}
</style>
