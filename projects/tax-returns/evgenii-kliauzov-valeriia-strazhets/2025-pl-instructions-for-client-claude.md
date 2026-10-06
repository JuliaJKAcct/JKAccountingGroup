# Evgenii Kliauzov & Valeriia Strazhets — 2025 · the P&L instructions sent to the clients' own Claude

> **Status:** 🟡 **DRAFTED 2026-10-06, sent by Lilian** (not confirmed sent) · **Asked for by:** Lilian ·
> **Goes to:** Irina, on WhatsApp, as a `.txt` file she uploads into the clients' Claude chat ·
> **Language:** Russian (the clients and Irina speak only Russian).

## What this is

The couple prepares their own 2025 P&Ls in **their own Claude**, from a prompt Julia sent them
(*"Please help me get my business records ready for my accountant"* — four steps and a five-tab
workbook). Irina, who prepares the workbooks for both spouses, had already uploaded the 2025
statements of Evgenii's **business account** and the couple's **joint personal account**, plus the
firm's **P&L** and **Home Office** templates. That chat was missing the context only the firm has.
This text supplies it, and **adds to Julia's prompt without replacing it**.

It is kept here because it defines **what the workbook that comes back will contain**, which is
what the 2025 preparation starts from. The client's facts and Lilian's decisions are in
[`client-intelligence/clients/evgenii-kliauzov-valeriia-strazhets.md`](../../client-intelligence/clients/evgenii-kliauzov-valeriia-strazhets.md).
No figures here, and none belong here until a working paper (`2025-form-1040.md`) is started.

## What it tells the clients' Claude — in English

| # | Instruction | Why |
|---|---|---|
| 1 | Two businesses, one per spouse, each its own Schedule C: **Evgenii** — Amazon-selling consulting; **Valeriia** — marketing and fitness training | Claude had only Julia's single-business template |
| 2 | **Part 1 = Evgenii only; part 2 = Valeriia, later.** Never mixed in one P&L | Lilian's order of work |
| 3 | The **joint personal account** mixes household spending, both businesses, home and car costs, and maybe business income. Find as much of his business as possible, **but only from Irina's answers**, never from the bank description. A client deposit is asked openly (his client, her client, or something else — gift, repayment, family) | Julia's rule 3 still governs |
| 4 | Business ↔ joint transfers appear in both files: match them; not income, not expense | Avoid double counting |
| 5 | **"Amazon" in a bank description proves nothing either way** — it can be family or business; ask Irina, who can check Amazon order history | His business is Amazon-related, which makes this the likeliest mistake |
| 6 | `To confirm`: **`Whose?`** replaces `Business or personal?` — *Evgenii business / Valeriia business / Personal / Mixed / Not sure* (the marking comes from Irina). The same column, without a dropdown, in `All transactions`. **One row per payee per account**, with an `Account` column (Business / Joint); a Group ID that spans both accounts is split | Lilian approved: mark Valeriia's lines now, ask what they were for only in part 2. One answer must never cover a payee that is business on one account and family on the other |
| 7 | Home, car and phone lines skip `Whose?` (*Shared — home / car / phone*, never in `To confirm`) **only when the payee settles it** (fuel station, SunPass, utility, insurer, car lender). **Multipurpose stores** (Costco, Walmart, Target, Home Depot, Lowe's, Amazon, a gas-station shop) go to `To confirm` first | Lilian wants Claude to find the car costs itself, without sweeping a Home Depot or Costco run into the pools |
| 8 | New group **`V`** for Valeriia's lines, as **two totals**: `Summary` reconciles as *in = I1…I5 + V-in*, *out = A + B + C + D + V-out*; never netted | Every row stays classified and the reconciliation still closes |
| 9 | **Home office**: household totals by category from both accounts (rent; mortgage payment; utilities; home internet; insurance; HOA; property tax; repairs; other), year + count + by month, with the payees listed under each. **No split, no percentage, never on the P&L.** A **mortgage payment is not an expense in full** (principal, interest, escrow) — its own line, `Mortgage payments (total)`. Follow the Home Office template's lines; compute totals itself because a template formula may skip a row | Firm splits by the area each spouse works in, and takes interest and property tax from the 1098 and the tax bill. On the firm's own template the total drops Insurance ([Bogopolskyy](../../client-intelligence/clients/bogopolskyy-marat-yuliana.md) §5) |
| 10 | **Vehicles**: totals for **both cars together** from both accounts (fuel, repairs, car wash, tolls, parking, insurance, loan/lease payments, registration, other), payees listed. No split, never on the P&L; a loan payment on its own line; **fines out** (group C) | Firm assigns one car per Schedule C and decides the division; Bogopolskyy's two P&Ls carried the same car's bills |
| 11 | Phones: a separate household total; Claude does not assume work or personal — it asks whose each number is and whether one is work-only. Home internet goes to Home Office | Julia's prompt pooled phone + internet; the business share has to be established |
| 12 | Workbook: Julia's 5 tabs + **`Profit and Loss`** (template lines, confirmed I1/I2/A only, each line tied to `All transactions`; template rows for home, car, meals, telephone, depreciation left blank with a pointer; a **`Group B — for the accountant`** block underneath with Evgenii's B totals; pending items shown), **`Home Office`**, **`Vehicles`** (with empty slots for areas in sq ft, exclusive-use yes/no, cars, odometers). **No Balance Sheet.** Home Office and Vehicles built once, reused in part 2 | Lilian, 2026-10-06 — the Balance Sheet was asked for and withdrawn the same day. Without the Group B block, meals and equipment would sit off the P&L with nothing showing they exist |
| 13 | Language: tabs/headers English; `To confirm` instruction and fill-in headers also Russian; Irina's answers carried into `Business purpose` in English | Lilian reads the workbook in English; Irina reads Russian |
| 14 | How to treat Irina: simple Russian, bullets, one step at a time, ≤10 numbered questions per batch, biggest first; each question says **whom to ask** (Evgenii / Valeriia / both) and is forwardable; she may answer in the chat or in Excel; step-by-step file instructions | She finds Claude hard and relays questions to both spouses |
| 15 | Extra questions: rent vs own; square footage of the home and of the room or area each spouse works in (in sq ft — metres flagged as metres) and whether it is used only for work; lease / 1098 / property-tax documents; each car's make/model/year, driver, owned/financed/leased, odometer 1 Jan and 31 Dec 2025, business-mile records, loan/lease statement; whose each phone number is; whether Valeriia has her own business account | What the firm needs to allocate home office, cars and phones |
| 16 | First reply: restate the instructions, say which step it is on, fix and report anything already done that conflicts, confirm it can see both templates | The chat was already under way |

## The text, verbatim

```text
ДОПОЛНИТЕЛЬНЫЕ ИНСТРУКЦИИ ОТ НАШЕГО БУХГАЛТЕРА
(JK Accounting Group)

Этот текст написал наш бухгалтер. В чат его отправляет Ирина.

Это продолжение нашей работы. Не начинай сначала.
Эти инструкции дополняют первую инструкцию («Please help me get my business records ready for my accountant»). Все её правила остаются в силе.
Если что-то здесь отличается от первой инструкции, следуй этому тексту.


==================================================
С ЧЕГО НАЧАТЬ
==================================================

Сначала ответь Ирине коротко, по пунктам:

1. Как ты понял эти инструкции (5–7 пунктов).
2. На каком шаге мы сейчас (шаг 1, 2, 3 или 4 из первой инструкции).
3. Что из уже сделанного нужно изменить из-за этих инструкций. Исправь это и скажи, что изменилось.
4. Видишь ли ты в этом чате два шаблона от бухгалтера: «Profit and Loss» и «Home Office». Если не видишь, попроси Ирину загрузить их снова.

Потом продолжай с того места, где мы остановились.


==================================================
1. КТО ЕСТЬ КТО
==================================================

• Евгений (Evgenii Kliauzov) и Валерия (Valeriia Strazhets) — муж и жена.
• У каждого свой бизнес. Оба работают как «sole proprietor». Каждый бизнес идёт в отдельный «Schedule C».
• Бизнес Евгения: консультации о том, как продавать на Amazon.
• Бизнес Валерии: маркетинг и работа фитнес-тренером.
• Ирина помогает семье. Она готовит документы для обоих: сначала для Евгения, потом для Валерии.
• Ирина не всегда знает ответ сама. Она будет задавать твои вопросы Евгению и Валерии и приносить ответы в этот чат.


==================================================
2. ПОРЯДОК РАБОТЫ: СНАЧАЛА ЕВГЕНИЙ, ПОТОМ ВАЛЕРИЯ
==================================================

• Часть 1 (сейчас) — только бизнес Евгения.
• Часть 2 (потом) — бизнес Валерии. Ирина напишет, когда начинать.
• Не смешивай два бизнеса. В «Profit and Loss» Евгения — только доходы и расходы бизнеса Евгения.
• Но уже сейчас попроси Ирину отметить, чья каждая строка общего счёта (раздел 4). Сам не решай — записывай её ответ. Тогда в части 2 всё, что относится к Валерии, уже будет отделено.
• Если Ирина отметила строку «Бизнес Валерии», в части 1 не спрашивай, для чего был этот расход. Подробные вопросы о её бизнесе будут в части 2.


==================================================
3. ДВА СЧЁТА
==================================================

БИЗНЕС-СЧЁТ ЕВГЕНИЯ (business account)
• Это счёт его бизнеса.
• Но там тоже могут быть личные платежи. Если не уверен, спроси.

ОБЩИЙ ЛИЧНЫЙ СЧЁТ (joint personal account) — это самое сложное
• Этим счётом пользуются оба: и Евгений, и Валерия.
• Там всё вместе:
  – личные расходы семьи;
  – расходы бизнеса Евгения;
  – расходы бизнеса Валерии;
  – общие расходы на дом и на две машины;
  – возможно, доход бизнеса — деньги от клиентов Евгения или Валерии.
• Твоя задача — найти в этом счёте как можно больше расходов бизнеса Евгения.
• Но решать «это бизнес» можно только по ответу Ирины, а не по описанию банка (правило 3 первой инструкции).
• Если на общий счёт пришли деньги от клиентов, это может быть доход бизнеса. Спроси, что это за деньги: оплата от клиента Евгения, оплата от клиента Валерии или что-то другое (подарок, возврат долга, перевод от родных).

ПЕРЕВОДЫ МЕЖДУ ДВУМЯ СЧЕТАМИ
• Перевод с бизнес-счёта на общий счёт (и обратно) виден в обоих файлах.
• Найди такие пары. Это перевод между своими счетами. Это не доход и не расход (группы I3 и C первой инструкции).

ОСТОРОЖНО СО СЛОВОМ «AMAZON»
• Бизнес Евгения связан с Amazon. Но слово «Amazon» в описании банка не значит, что это бизнес.
• «Amazon» или «AMZN Mktp» на общем счёте может быть и покупкой для семьи, и покупкой для бизнеса. По описанию банка этого не понять — спроси Ирину.
• Ирина может проверить такие покупки в истории заказов Amazon («Your Orders») и сказать, что было для бизнеса.
• Если от Amazon пришли деньги на счёт, спроси, что это за деньги.


==================================================
4. ЧЕЙ ЭТО ПЛАТЁЖ — ОТМЕТКА ДЛЯ КАЖДОЙ СТРОКИ
==================================================

Во вкладке «To confirm» замени колонку «FILL IN: Business or personal?» на колонку «FILL IN: Whose? / Чьё это?».
В этой колонке сделай выпадающий список. В нём ровно пять вариантов:

• Evgenii business / Бизнес Евгения
• Valeriia business / Бизнес Валерии
• Personal / Личное
• Mixed / Смешанное
• Not sure / Не знаю

Добавь такую же колонку «Whose?» во вкладку «All transactions» (там без выпадающего списка).

ДОМ, МАШИНЫ И ТЕЛЕФОНЫ — БЕЗ ЭТОЙ ОТМЕТКИ
• Расходы на дом, на машины и на телефоны не требуют этой отметки. Они идут в отдельные итоги (разделы 5, 6 и 7).
• Не спрашивай Ирину, чей это бензин или чей счёт за свет. Такие строки не ставь во вкладку «To confirm».
• Во вкладке «All transactions» в колонке «Whose?» для них пиши «Shared — home», «Shared — car» или «Shared — phone».
• Но так можно делать, только если по получателю это точно видно: заправка, SunPass, электрическая или водная компания, страховая компания, банк по кредиту за машину.
• Если магазин продаёт разное (Costco, Walmart, Target, Home Depot, Lowe's, Amazon, магазин при заправке), не клади его покупки в итоги дома или машин без ответа Ирины. Поставь их во вкладку «To confirm», одна строка на получателя. Если Ирина ответит, что это для дома или для машины, перенеси строку в итоги раздела 5 или 6.

ОДНА СТРОКА — ОДИН СЧЁТ
• Во вкладке «To confirm» одна строка = один получатель на одном счёте.
• Добавь колонку «Account»: с какого счёта платёж (Business или Joint).
• Если получатель есть на обоих счетах (например, Amazon), сделай две строки с разными Group ID.
• Если какой-то Group ID уже объединяет оба счёта, раздели его сейчас (пункт 3 в начале).

НОВАЯ ГРУППА «V» — ВАЛЕРИЯ
• Всё, что Ирина отметила «Бизнес Валерии», — это не доход и не расход Евгения.
• Положи такие строки в новую группу «V — Valeriia business (part 2)». Это и деньги, которые пришли, и деньги, которые ушли.
• Не клади их в «Profit and Loss» Евгения.
• Сверка во вкладке «Summary» теперь такая:
  – деньги пришли = I1 + I2 + I3 + I4 + I5 + V-in;
  – деньги ушли = A + B + C + D + V-out.
• V-in (пришло) и V-out (ушло) — два отдельных итога, две строки в «Summary». Не вычитай одно из другого.
• Во вкладке «Money in by payer» для денег Валерии пиши группу V-in.


==================================================
5. ДОМ — HOME OFFICE
==================================================

• Евгений и Валерия работают из дома. У каждого своя комната или часть дома для работы.
• Поэтому расходы на дом нужны обоим бизнесам.
• Найди все расходы на дом на обоих счетах. Посчитай итог за год по каждой категории:
  – аренда (rent);
  – платёж по ипотеке (mortgage) — мы пока не знаем, дом в аренде или в собственности;
  – электричество;
  – вода и канализация;
  – газ;
  – интернет дома;
  – страховка дома или квартиры;
  – HOA (плата ассоциации жильцов);
  – налог на недвижимость (property tax);
  – ремонт и обслуживание дома;
  – вывоз мусора, охрана;
  – другое — с коротким описанием.
• Для каждой категории покажи: итог за год, число платежей и итог по месяцам. Так видно, если какой-то месяц пропущен.
• Под каждой категорией перечисли получателей, которые в неё вошли.
• Если это ипотека: платёж по ипотеке — это не расход целиком. В нём есть долг, проценты, а иногда налог на дом и страховка. Покажи эти платежи отдельной строкой «Mortgage payments (total)». Не ставь их в строку аренды или процентов в шаблоне. Строки налога и страховки из этого платежа не заполняй.
• Это группа B первой инструкции. Это итог для бухгалтера, а не вычет.
• Не дели между Евгением и Валерией. Не применяй процент. Не включай эти суммы в «Profit and Loss».
• Мы, бухгалтеры, сами решим, какая часть пойдёт в бизнес Евгения и какая — в бизнес Валерии. Мы решим это по площади, где работает каждый.
• Используй шаблон «Home Office» как образец: какие строки там есть и в каком виде их заполнять.
• Пиши полные суммы за год. Если в шаблоне есть поле для процента, оставь его пустым.
• Итоги считай сам. Не полагайся на формулы шаблона: одна из них может пропускать строку (например, страховку).


==================================================
6. ДВЕ МАШИНЫ
==================================================

• В семье две машины. Мы отнесём одну машину к бизнесу Евгения, другую — к бизнесу Валерии.
• Расходы на машины платят с общего счёта, и по банку не видно, какая это машина. Поэтому сейчас нужны итоги по обеим машинам вместе.
• Найди все расходы на машины на обоих счетах (на бизнес-счёте тоже). Посчитай итог за год по каждой категории:
  – бензин;
  – ремонт и обслуживание (масло, шины и т. п.);
  – мойка;
  – платные дороги (SunPass и т. п.);
  – парковка;
  – страховка машин;
  – платежи за машину — кредит или лизинг;
  – регистрация и номера;
  – другое — с коротким описанием.
• Для каждой категории покажи итог за год и число платежей.
• Под каждой категорией перечисли получателей, которые в неё вошли.
• Это группа B первой инструкции. Это итог для бухгалтера, а не вычет.
• Если по документу точно видно, какая это машина, напиши это в комментарии. Не угадывай.
• Не дели между машинами. Не применяй процент. Не включай эти суммы в «Profit and Loss». Мы сами решим, как их разделить.
• Платёж по кредиту за машину — это не расход целиком (так сказано и в первой инструкции). Покажи эти платежи отдельной строкой.
• Штрафы (за парковку, за скорость, за неоплаченную платную дорогу) — не расход бизнеса. Это группа C первой инструкции. Не включай их в итоги по машинам.


==================================================
7. ТЕЛЕФОНЫ
==================================================

• Если есть счета за мобильную связь, посчитай их итог за год отдельно (группа B первой инструкции). Не дели, не применяй процент.
• Не решай сам, для работы телефон или для себя. Вопрос об этом — в разделе 10.
• Домашний интернет — в «Home Office» (раздел 5), не здесь.


==================================================
8. ФАЙЛ EXCEL — КАКИЕ ВКЛАДКИ НУЖНЫ
==================================================

Оставь пять вкладок из первой инструкции: «Summary», «All transactions», «To confirm», «Money in by payer», «Questions».
Добавь три новые вкладки.

ВКЛАДКА 6 «Profit and Loss» — для Евгения
• Сделай её по образцу шаблона «Profit and Loss», который Ирина загрузила раньше. Используй его строки (статьи доходов и расходов).
• Туда идут только доходы бизнеса Евгения и только расходы, которые Ирина подтвердила как его бизнес (группы I1, I2 и A).
• Сумма каждой строки должна совпадать с суммой строк во вкладке «All transactions». Покажи рядом проверку.
• Если для расхода нет строки в шаблоне, используй «Other expenses» и коротко напиши, что это.
• Расходы на дом и на машины в «Profit and Loss» не ставь. Если в шаблоне есть строки для них, оставь их пустыми и напиши: «see Home Office / Vehicles tab — accountant will allocate».
• Другие расходы бизнеса Евгения из группы B (meals, equipment, телефоны, смешанные расходы) тоже не ставь в таблицу. Если в шаблоне есть строки для них (например, Meals, Telephone, Depreciation), оставь их пустыми и напиши: «see Group B below — accountant will compute».
• Под таблицей сделай блок «Group B — for the accountant (not in the P&L above)»: по каждой группе B — итог и число строк Евгения. Отдельной строкой дай ссылку на итоги вкладок «Home Office» и «Vehicles».
• Под таблицей покажи отдельно, что ещё не подтверждено (вкладка «To confirm»): число строк и сумму.

ВКЛАДКА 7 «Home Office» — общая для семьи
• Итоги из раздела 5.
• Добавь строки для данных, которые дадут Евгений и Валерия: аренда или собственность; общая площадь дома (sq ft); площадь, где работает Евгений (sq ft); площадь, где работает Валерия (sq ft); используется ли каждое из этих мест только для работы (да/нет). Пока ответа нет, оставь их пустыми.

ВКЛАДКА 8 «Vehicles» — общая для семьи
• Итоги из раздела 6.
• Добавь блок для каждой машины (данные из ответов): марка, модель, год; кто на ней ездит; своя, в кредите или в лизинге; пробег на 1 января 2025 и на 31 декабря 2025; есть ли записи о поездках по делам бизнеса. Пока ответа нет, оставь пустыми.

Вкладки «Home Office» и «Vehicles» сделай один раз, сейчас. В части 2 они понадобятся и для Валерии.

Balance Sheet не нужен. Не делай его.

ЯЗЫК ФАЙЛА
• Названия вкладок, заголовки и описания расходов — на английском, как в первой инструкции. Наш бухгалтер работает с файлом на английском.
• Но во вкладке «To confirm» верхнюю строку-инструкцию и заголовки колонок, которые заполняет Ирина, напиши на двух языках: на английском и на русском.
• Ирина отвечает по-русски. Когда переносишь её ответ в файл, в колонке «Business purpose» напиши смысл ответа по-английски.


==================================================
9. КАК ПОМОГАТЬ ИРИНЕ
==================================================

Ирине непросто работать с Claude. Сделай работу для неё как можно проще.

• Пиши по-русски, простыми словами. Без налоговых терминов. Если термин нужен, объясни его одной фразой.
• Пиши короткие сообщения. Используй списки с пунктами. Один шаг за раз.
• Вопросы нумеруй. Не больше 10 вопросов за раз. Сначала — самые большие суммы.
• В каждом вопросе укажи:
  – дату, сумму и описание из банка (или получателя и итог за год, если это группа платежей);
  – что это может быть, по-твоему;
  – варианты ответа;
  – кого лучше спросить: Евгения, Валерию или обоих.
• Пиши вопрос так, чтобы Ирина могла его скопировать и отправить Евгению или Валерии.
• Ирина может отвечать так, как ей удобнее:
  1) прямо в чате: номер вопроса (или Group ID) и ответ;
  2) в файле Excel, во вкладке «To confirm».
  Ответы из чата ты сам переносишь в файл.
• Когда даёшь Ирине файл Excel, объясни ей по шагам:
  1. Скачай файл.
  2. Открой вкладку «To confirm».
  3. Заполняй только цветные колонки. (Объясни каждую цветную колонку одной фразой.)
  4. Не удаляй строки, не меняй их порядок, не меняй Group ID.
  5. Сохрани файл и загрузи его обратно в этот чат.
• После каждого ответа скажи коротко: что изменилось и сколько вопросов осталось.
• Не задавай один и тот же вопрос дважды.


==================================================
10. ДОБАВЬ ВО ВКЛАДКУ «QUESTIONS»
==================================================

Добавь эти вопросы к своим.

ДОМ
• Дом в аренде или в собственности?
• Какая общая площадь дома (в квадратных футах)?
• Какая площадь комнаты или части дома, где работает Евгений? А где работает Валерия? Напишите в квадратных футах (sq ft). Если знаете только в метрах, так и напишите: «метры».
• Это место используется только для работы? Или там ещё спят, отдыхают, живут гости?
• Документы: если аренда — договор аренды. Если собственность — форма 1098 от банка (проценты по ипотеке) и счёт на налог на недвижимость за 2025 год.

МАШИНЫ
• Марка, модель и год каждой машины. Кто на какой ездит?
• Каждая машина своя, в кредите или в лизинге?
• Пробег (одометр) на 1 января 2025 и на 31 декабря 2025. Если точных цифр нет, какие документы с пробегом есть (например, счёт из сервиса)?
• Есть ли записи о поездках по делам бизнеса (журнал, календарь, приложение)?
• Документы: годовая выписка по кредиту или лизингу за 2025 год; договор кредита или лизинга.

ТЕЛЕФОНЫ
• Чей каждый номер телефона? Есть ли номер только для работы?

ВАЛЕРИЯ (для части 2)
• Есть ли у Валерии свой бизнес-счёт или бизнес-карта? Если есть, понадобятся выписки за 2025 год.


==================================================
11. ЧТО НЕ МЕНЯЕТСЯ
==================================================

Все правила первой инструкции остаются. Главные из них:
• Считай кодом, каждую строку. Ничего не теряй и ничего не считай дважды.
• Не решай по описанию банка, что это бизнес.
• Не применяй проценты, не дели платежи, ничего не оценивай «на глаз». Это делаем мы, бухгалтеры.
• «Не знаю, спросим клиента» — правильный ответ. Неправильная категория — неправильный.


==================================================
12. КОГДА ЧАСТЬ 1 ГОТОВА
==================================================

• Дай Ирине итоговый файл Excel для Евгения и короткий честный список того, что ещё не решено.
• Ирина отправит файл нам.
• Потом Ирина напишет тебе, чтобы начать часть 2 — бизнес Валерии. Тогда сделай отдельный файл Excel для Валерии по тем же правилам.
```

## The WhatsApp cover message for Irina — verbatim

Written in **simple Russian** because it goes out under **Lilian's** name (CLAUDE.md, Russian register rule).

```text
Ирина, добрый день!

Отправляю файл с инструкциями для «Claude». Там всё, что «Claude» нужно знать про счета, дом и машины.

Что нужно сделать:
1. Откройте тот же чат «Claude», где вы загрузили выписки. Не новый чат.
2. Загрузите туда этот файл (так же, как вы загружали выписки).
3. Напишите: «Прочитай этот файл и работай по этим инструкциям».
4. Отправьте.

Дальше «Claude» будет вести вас по шагам и задавать вопросы.
Сначала работаем только с бизнесом Евгения. Потом — с бизнесом Валерии.
Некоторые вопросы нужно будет задать Евгению или Валерии. «Claude» напишет, кого спросить.

Если что-то непонятно, пишите мне.
Спасибо!
Лилиан
```
