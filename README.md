# Strona gabinetu Dagmary Piotrowskiej

Statyczna strona Jekyll publikowana przez GitHub Pages. Bieżąca domena to
`psychodietetyk-piotrowska.pl`; plik `CNAME` pozostaje bez zmian.

## Edycja treści

- `_config.yml`: nazwa gabinetu, tytuł i opis strony, kontakt, godziny, Booksy i Google.
- `_data/about.yml`: akapity sekcji „O mnie”.
- `_data/treatments.yml`: trzy opisy oferty.
- `_data/articles.yml`: lista artykułów widocznych na stronie głównej.
- Pliki Markdown w katalogu głównym: treści artykułów.
- `index.html`: sekcje strony i cennik.
- `css/updates.css`: style aktualizacji, nakładane na dotychczasowy motyw.
- `js/custom.js`: obsługa menu i opinii; oba szablony ładują ten plik bezpośrednio.

Zdjęcia artykułów i nowy portret zapisano w formacie WebP. Dotychczasowe zdjęcie
„O mnie” zachowano. Sekcja opinii zawiera trzy ręcznie dodane opinie z Google
(MONIA D., Ilona M, Kacper Berus), sprawdzone 10 października 2026.
Dłuższe opinie wyświetlane są jako oznaczone fragmenty, bez zmiany słów autorów.
Każdy wpis ma ocenę i bezpośredni odnośnik do oryginału; pozostaje też przycisk
do całej wizytówki. Sekcja nie pobiera automatycznie ocen ani recenzji.
Kolejne aktualizacje wprowadza się w `_data/testimonials.yml`; `checked_at`
oznacza dzień sprawdzenia, a nie datę publikacji opinii.

## Podgląd lokalny

Zainstaluj Ruby i Bundler, następnie uruchom:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Podgląd: `http://127.0.0.1:4000/`. Budowanie bez serwera:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

`Gemfile.lock` nie jest wersjonowany, ponieważ lokalne wersje Ruby i platformy
mogą się różnić. GitHub Pages zapewnia własne środowisko Jekyll.
Nie trzeba uruchamiać starego Grunta ani instalować pakietów npm, aby budować tę stronę.

## Zakres aktualizacji z października 2026

Wprowadzono osiem tekstów z dostarczonego Worda, portret i cztery ilustracje.
Połączono urwaną końcówkę opisu psychodietetyki z właściwym akapitem.
W artykule o efekcie jo-jo zastąpiono błędny odnośnik do materiału o lipodystrofii
pasującym materiałem NIDDK o utrzymaniu masy ciała. Pozostałe odnośniki pochodzą
z dokumentu.

Stary adres `/efekt-jo-jo` zawiera nowy tekst. `/zaburzenia-odzywiania` przekierowuje
na `/rodzina-anoreksja`, a `/praca-psychodietetyka` do aktualnej oferty.
Mapa witryny zawiera stronę główną i cztery aktualne artykuły.

Zmiana domeny na `dagmarapiotrowska.pl` jest odłożona na później. Nie zmieniono DNS
ani ustawień wizytówki Google. Godziny w Google trzeba aktualizować osobno;
w chwili sprawdzania profil wskazywał otwarcie w poniedziałek o 09:00,
a dokument do strony podaje 10:00.
