# manfred backend

## linter-formatter setup

Tools that are used:

-   eslint
-   prettier
-   shellcheck
-   shfmt

### local environment

On local env, those are run in two ways:

1. On save, via vscode extensions.\
   You need to install folowing extensions:

    - dbaeumer.vscode-eslint
    - esbenp.prettier-vscode
    - timonwong.shellcheck
    - foxundermoon.shell-format

    First three should be working out of the box, but last one (shell-format) needs [shfmt](https://github.com/mvdan/) as a dependency to be installed by you on your computer.

    In the `backend/.vscode/settings.json` there are file mappings specified, to relate formatter to filetype. You can find other default settings there as well.

2. Via pre-commit hooks.\
   Those are optional, but you really should use them! You can install those via `yarn run install-githooks`.

    Those will use your local packages, so you need to have `yarn install` done, and [shfmt](https://github.com/mvdan/) and [shellcheck](https://github.com/koalaman/shellcheck) installed.

### CI pipeline

All tools are run in the pipeline.
