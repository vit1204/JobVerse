<template>
  <header :class="$style.header">
    <ul>
      <li>
        <img
          src="../../assets/img/logo.png"
          style="width: 100px;height: 50px;object-fit: contain;margin-left:30px;" alt=""
        >
      </li>

      <li>
        <a href="">Challenge</a>
      </li>
      <li>
        <a href="">Contact Us</a>
      </li>
      <li>
        <a href="">About Us</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 16px;
    color: white;
    background-color: rgb(23, 135, 51);
    border-radius: 24px;

    &:hover {
      background-color: #0C6124;
    }
  }

  ul {
    margin: 0;
    height: 100%;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    height: 60px;

    &:first-child {
      display: flex;
      align-items: center;
      margin-left: -20px;
      margin-right: auto;
    }
  }

  a {
    height: 100%;
    padding: 0 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: var(--color-primary);
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-secondary);
    }
  }
}
</style>
