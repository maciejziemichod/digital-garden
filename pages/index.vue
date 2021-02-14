<template>
    <main>
        <section>
            <article>
                <p>Hello 👋🏻</p>
                <p>
                    My name is Maciej Ziemichód. I'm a web developer, music
                    addict and physical activity enthusiast.
                </p>
                <p>
                    This is my personal digital garden website where I drop
                    thoughts and notes about things that I'm currently doing or
                    interested in. It's a kind of journal, but without any
                    specific order in mind.
                </p>
                <p>
                    Entries here aren't and probably won't be ever completed.
                    They will grow as I come back to them to add more content.
                    That's why it's called digital garden, my thoughts are
                    growing plants.
                </p>
                <p>
                    You can contact me by email or twitter, I also have
                    portfolio page. Links are in the footer.
                </p>
                <p>
                    If you like something you read here, please feel free to
                    share it and let me know. It's always nice to get feedback.
                </p>
            </article>
        </section>
        <section>
            <h3>Personally picked out</h3>
            <p>List of articles that, in my opinion, are the best:</p>
            <ul>
                <li>
                    <NuxtLink to="/adding-images-to-markdown-in-nuxt">
                        Adding images to Markdown in Nuxt
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/choosing-the-dark">
                        Choosing the Dark
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/films-i-wish-i-could-watch-for-the-first-time"
                    >
                        Films I wish I could watch for the first time
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink class="btn" to="/articles"> Show all articles</NuxtLink>
        </section>
    </main>
</template>

<style scoped>
.btn {
    border: 1px solid var(--special-font-color);
    padding: 8px 12px;
    margin-top: 60px;
    display: inline-block;
    border-radius: 5px;
}
.btn:hover {
    background-color: var(--hover-background-color);
    border-color: var(--hover-background-color);
    color: var(--hover-font-color);
}

@media (max-width: 767px) {
    .btn {
        margin: 60px auto 0;
        display: block;
        width: fit-content;
    }
}
</style>
