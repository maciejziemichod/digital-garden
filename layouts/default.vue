<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/"
          ><span>
            <TreeComponent class="tree" />
          </span>
          <span>
            <LogoComponent class="logo" />
          </span>
          <span class="home-title"> my digital garden </span>
        </NuxtLink>
        <span>
          <SearchComponent />
          <ColorModeButton />
        </span>
      </nav>
    </header>
    <div class="container">
      <Nuxt />
      <AppFooter />
    </div>
  </div>
</template>

<style>
:root {
  --main-font-color: #354951;
  --main-faded-font-color: #354951a5;
  --special-font-color: #29c29e;
  --code-background-color: #e3e3e3;
  --background-color: #f3f3f3;
  --hover-background-color: #3b8070;
  --hover-font-color: #f3f3f3;
  --footer-line-color: rgba(19, 20, 21, 0.2);
}

.dark-mode {
  --main-font-color: #f3f3f3;
  --main-faded-font-color: #f3f3f3a5;
  --code-background-color: #2d3748;
  --background-color: #0d1b20;
  --footer-line-color: rgba(218, 228, 238, 0.2);
}

html {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 112.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: var(--main-font-color);
  background-color: var(--background-color);
  line-height: 1.5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

button,
a {
  color: inherit;
}

button:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--special-font-color);
}

ul {
  list-style-position: inside;
  margin-left: -40px;
  /* doesn't work in nuxt */
  /* padding-inline-start: 0; */
}

li::marker {
  color: var(--main-faded-font-color);
}

ul,
ol,
p {
  padding-bottom: 1.3rem;
}
p:last-child {
  padding-bottom: 1.5rem;
}

h2,
h3 {
  padding-bottom: 0.775rem;
}

h3 {
  font-size: 1.3rem;
}

a h1,
a h2,
a h3,
a h4,
a h5,
a h6 {
  color: var(--main-font-color);
}

pre {
  border-radius: 0.375rem;
}

p > code {
  font-family: inherit;
  background-color: var(--code-background-color);
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

header {
  padding: 40px 20px;
}

header nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  position: relative;
}

header nav .tree,
header nav .logo {
  display: inline-block;
}

header nav .tree {
  width: 85px;
}

header nav .logo {
  margin-left: -10px;
  margin-bottom: 12px;
}
header nav .home-title {
  transform: translate(10%, 50%);
  bottom: 50%;
  position: absolute;
  width: max-content;
  color: var(--main-font-color);
  font-size: 1.125rem;
}
header nav a:hover .home-title {
  color: var(--special-font-color);
}
header nav a {
  width: 320px;
}

.container {
  width: 100%;
  margin: 0px auto;
  max-width: 850px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 500px) {
  header nav .home-title {
    display: none;
  }
  header nav a {
    width: 140px;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.3s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>
