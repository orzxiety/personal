<script lang="ts">
    import discord_icon from '../assets/icons/discord.svg?raw';
    import telegram_icon from '../assets/icons/telegram.svg?raw';
    import github_icon from '../assets/icons/github.svg?raw';

    const avatarUrl = "https://github.com/Orzxiety.png";
    const discordLink = "https://discord.com/users/565956261968085003";
    const telegramLink = "https://t.me/orzxiety";
    const githubLink = "https://github.com/Orzxiety";
</script>

<main class="flex flex-col items-center justify-center gap-6 h-screen bg-neutral-900">
    <div class="flex flex-row gap-4 sm:gap-6">
        <img class="size-14 sm:size-20 rounded-full" src={ avatarUrl } alt="Аватар Orzxiety">
        <div class="flex items-center justify-center">
            <h1 class="text-4xl sm:text-5xl font-body font-medium text-neutral-100">Orzxiety</h1>
        </div>
    </div>
    <div class="flex flex-row gap-6">
        <a href={ discordLink } aria-label="Discord">
            <p class="size-8 sm:size-12 fill-neutral-100 hover:fill-neutral-300">{@html discord_icon}</p>
        </a>
        <a href={ telegramLink } aria-label="Telegram">
            <p class="size-8 sm:size-12 fill-neutral-100 hover:fill-neutral-300">{@html telegram_icon}</p>
        </a>
        <a href={ githubLink } aria-label="Github">
            <p class="size-8 sm:size-12 fill-neutral-100 hover:fill-neutral-300">{@html github_icon}</p>
        </a>
    </div>
</main>
