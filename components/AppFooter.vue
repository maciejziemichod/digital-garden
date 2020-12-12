<template>
  <footer>
    <div>Designed & built by Maciej Ziemichód</div>
    <div>
      You can visit my main page
      <a
        href="https://maciejziemichod.github.io/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </div>
    <div class="icons">
      <a
        href="https://github.com/maciejziemichod"
        target="_blank"
        rel="noopener noreferrer"
        class="fa-lg"
      >
        <FaIcon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"
        target="_blank"
        rel="noopener noreferrer"
        class="fa-lg"
      >
        <FaIcon :icon="['fab', 'linkedin-in']" />
      </a>
      <a
        href="https://twitter.com/Maciej84900684"
        target="_blank"
        rel="noopener noreferrer"
        class="fa-lg"
      >
        <FaIcon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://codepen.io/maciejziemichod"
        target="_blank"
        rel="noopener noreferrer"
        class="fa-lg"
      >
        <FaIcon :icon="['fab', 'codepen']" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding-top: 60px;
  border-top: 1px solid var(--footer-line-color);
  margin-top: 60px;
}

.icons {
  padding: 15px 0 30px;
}

.icons a {
  color: var(--main-font-color);
  padding: 0 3px;
}
.icons a:hover {
  color: var(--special-font-color);
}
</style>