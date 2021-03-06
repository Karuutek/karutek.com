# Commit convention

## How to create commits

In our project, we create commits in an orderly way, using emoji for this and start the commit content with a capital letter. 
The commit body complements  βthis commit will...". For example: ":lipstick: Fix main container height"

## List of emojis that we use

| Text | Image | GFM shortcode* | Windows 10 picker name | When to use it |
|:--:|:-----:|:--------- |:-------------- |:-------------- |
| `π` | :tada: | `:tada:` | `party popper` | initial commit |
| `β¨` | :sparkles: | `:sparkles:` | `sparkles` | when adding a new user-facing feature |
| `π¨` | :art: | `:art:` | `artist palette` | when improving UI |
| `π¦` | :package: | `:package:` | `package` | when installing dependencies |
| `β»οΈ` | :recycle: | `:recycle:` | `recycle` | when refactoring or improving code |
| `π` | :racehorse: | `:racehorse:` | `horse` | when improving performance |
| `π` | :lock: | `:lock:` | `locked` | when improving security |
| `π§` | :wrench: | `:wrench:` | `wrench` | when updating configs |
| `βΏ` | :wheelchair: | `:wheelchair:` | `wheelchair symbol` |  when improving accessibility |
| `π` | :rocket: | `:rocket:` | `rocket` | when improving dev tools |
| `π` | :pencil: | `:pencil:` | `pencil` | when writing docs (e.g. README, code comments) |
| `π` | :gem: | `:gem:` | `gem stone` | when cutting a new release / version bump |
| `π` | :bug: | `:bug:` | `bug` | when fixing a bug |
| `π₯` | :boom: | `:boom:` | `collision` | when fixing a crash |
| `π±` | :non-potable_water: | `:non-potable_water:` | `non-potable water` | when fixing a memory leak |
| `π₯` | :fire: | `:fire:` | `fire` | when removing code or files |
| `β` | :white_check_mark: | `:white_check_mark:` | `check mark button` | when adding new tests |
| `π` | :green_heart: | `:green_heart:` | `green heart` | when fixing the CI build |
| `π` | :shirt: | `:shirt:` | `t-shirt` | when fixing linter warnings |
| `π‘` | :satellite: | `:satellite:` | `satellite antenna` | when adding instrumentation or metrics |
| `π` | :loud_sound: | `:loud_sound:` | `speaker high volume` | when adding logging |
| `π` | :mute: | `:mute:` | `muted speaker` | when removing logging |
| `β¬` | :arrow_up: | `:arrow_up:` | `up arrow` | when upgrading dependencies |
| `β¬` | :arrow_down: | `:arrow_down:` | `down arrow` | when downgrading dependencies |
| `π` | :crossed_flags: | `:crossed_flags:` | `crossed flags` | when adding an A/B test or feature flag** |
| `β‘` | :zap: | `:zap:` | `high voltage` | when making a backwards-incompatible change** |
| `π§` | :construction: | `:construction:` | `construction` | when the change is a work in progress (do not merge)** |

## How to decide which emoji to use

In most cases, your change will fit into a pretty obvious emoji category. If it doesn't, you should think hard about whether or not you're making a clean change. 

Often you can break up changes into two or more commits that each accomplish their own specific type of action. If that means you only change one tiny line or fix a simple typo in a commit, so be it! It should be a no-brainer that any given commit does exactly what it says it does β and only what is says it does. No side-effects. 

In general, you should use exactly one emoji per commit message. In rare cases, you should use a second emoji (e.g. when using something like β‘ to signify that whatever you just did β π, π₯, etc. β was a breaking change). 

Emoji will also depend on your client/user. A back-end API might use β¨ when adding new API endpoints, and the front-end app might use β¨ when using those endpoints to display new content.

## The formula

### Human *WIP*
`:[EMOJI_NAME]: [THE COMMIT WILL...]`
- `:sparkles: Add cool animations`
- `:bug: Fix the flicker`


### RegEx
`[:]([A-Z a-z])\w+[:] [A-Z]\w.*$`
[RegEx example](regexr.com/5hrd4)

## Examples
- `π Fix the flicker caused by the drawer`
- `β¨ Add a super cool animation for the drawer`
- `β»οΈ Refactor drawer code`
- `π₯ Remove deprecated drawer code`
- `π¦ Install react-littera@2.1.4`
