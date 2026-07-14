# Double first-login — saved email/message template

Ready-to-save copy for a **Double canned response / message template** (or a
Gmail template) that you send whenever a client asks how to log in for the first
time. Subject + body in **English and Russian**.

## How to use it

1. In Double, open **Message client** (or **Client communication → templates /
   canned responses**) and create a new template. Paste the subject and body for
   the client's language below.
2. **Attach the one-page visual guide PDF** from this folder:
   [`double-first-login-en.pdf`](./double-first-login-en.pdf) /
   [`double-first-login-ru.pdf`](./double-first-login-ru.pdf). That PDF is the
   self-contained visual (recreated portal screens) — it carries the "how it
   looks" part of the message.
3. Before sending, fill in `{{FIRST_NAME}}` and the client's portal link
   `{{PORTAL_URL}}`.

> **Why the visual is a PDF attachment, not inline images.** Email clients
> (Gmail included) strip `data:`-URI images, so the self-contained guide can't
> render reliably *inside* an email body. Attaching the one-page PDF gives the
> client the same visual, with zero image hosting to maintain. The body text
> below is written to stand on its own too — a client can follow it even without
> opening the PDF.

The steps in the body must match the visual guide and the SOP
([`../double-portal-first-login.md`](../double-portal-first-login.md)); if the
Double flow changes, update all three.

---

## English

**Subject:** Setting up your Client Portal password (2-minute, one-time step)

**Body:**

Hi {{FIRST_NAME}},

Welcome! Your Client Portal doesn't have a "sign up" button — you create your
own password right from the sign-in page. It takes about two minutes, and you
only do it once. Your email is already on file with us, so it's usually filled
in for you.

Here's the whole thing:

1. Open your sign-in page: {{PORTAL_URL}}
2. On the sign-in screen, click **"Forgot your password?"** (just above the
   password box, on the right).
3. Make sure your email is shown, then click **"Get reset link."**
4. Open the email from Double (check spam/promotions too) and choose a password.
5. That's it — from now on, sign in on the same page with your email and this
   password (in the **Password** box).

A couple of notes: please **skip "Sign in with magic link" and "Sign in with
Google"** — they don't work reliably on our portal. And if the reset email
doesn't arrive within a few minutes, just reply to this message and we'll send
you a fresh link directly.

I've attached a one-page picture guide that walks through each screen.

Warmly,
Julia Kononova, MBA, EA
JK Accounting Group

---

## Russian

**Subject (тема):** Настройка пароля для Клиентского портала (2 минуты, один раз)

**Body (текст):**

Здравствуйте, {{FIRST_NAME}}!

Добро пожаловать! В Клиентском портале нет кнопки «Зарегистрироваться» — вы
задаёте пароль сами прямо на странице входа. Это займёт около двух минут, и
сделать это нужно только один раз. Ваш email у нас уже есть, поэтому обычно он
подставляется автоматически.

Вот и всё, что нужно:

1. Откройте страницу входа: {{PORTAL_URL}}
2. На странице входа нажмите **«Forgot your password?»** (сразу над полем пароля,
   справа).
3. Проверьте, что указан ваш email, и нажмите **«Get reset link»**.
4. Откройте письмо от Double (проверьте и папки «Спам»/«Промоакции») и придумайте
   пароль.
5. Готово — дальше входите на той же странице по своему email и этому паролю
   (в поле **Password**).

Пара важных моментов: **не используйте «Sign in with magic link» и «Sign in with
Google»** — на нашем портале они работают ненадёжно. Если письмо для сброса
пароля не придёт в течение нескольких минут, просто ответьте на это сообщение —
и мы вышлем новую ссылку напрямую.

Во вложении — наглядная инструкция на одной странице с каждым экраном.

С теплом,
Julia Kononova, MBA, EA
JK Accounting Group
