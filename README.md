# Dolphin Group

Премиальный одностраничный корпоративный сайт Dolphin Group на Next.js 16, React 19, TypeScript и Tailwind CSS 4.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт будет доступен на `http://localhost:3000`.

## Production-настройки

Скопируйте `.env.example` в `.env.local` и задайте:

- `NEXT_PUBLIC_SITE_URL` — реальный публичный домен для canonical, sitemap, robots и structured data;
- `NEXT_PUBLIC_CONTACT_API_URL` — HTTPS endpoint контактной формы.

Без API форма валидирует поля, но не имитирует успешную отправку и явно сообщает о демонстрационном режиме.

## Проверки

```bash
npm run lint
npm run typecheck
npm run build
```

Контрольные скриншоты находятся в `artifacts/screenshots`.
