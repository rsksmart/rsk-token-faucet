<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle">RSK Token Faucet</h3>
<p align="middle">
  Get testing funds of your favorite RSK tokens
</p>
<p align="middle">
  <a href="https://rsksmart.github.io/rsk-token-faucet/">Go to the app</a>
</p>
<p align="middle">
  <a href="https://github.com/rsksmart/rsk-token-faucet/actions/workflows/ghpages.yml" alt="ghpages">
      <img src="https://github.com/rsksmart/rsk-token-faucet/actions/workflows/ghpages.yml/badge.svg" alt="ghpages" />
  </a>
  <a href="https://github.com/rsksmart/rsk-token-faucet/actions/workflows/pr.yml" alt="pr">
      <img src="https://github.com/rsksmart/rsk-token-faucet/actions/workflows/pr.yml/badge.svg" alt="pr" />
  </a>
  <a href="https://lgtm.com/projects/g/rsksmart/rsk-token-faucet/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/rsksmart/rsk-token-faucet" alt="Alerts">
  </a>
  <a href="https://lgtm.com/projects/g/rsksmart/rsk-token-faucet/context:javascript">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/rsksmart/rsk-token-faucet" alt="Code Quality">
  </a>
</p>

Features
- [`@rsksmart/rsk-token-faucet-contract`](https://github.com/rsksmart/rsk-token-faucet-contract) to allow users to fetch only once a day
- [`@rsksmart/rlogin`](https://github.com/rsksmart/rLogiin) to let the users login with their preferred wallet
- [`@rsksmart/rsk-testnet-token-metadata`](https://github.com/rsksmart/rsk-testnet-token-metadata) to list all RSK ERC20 tokens
- [`@rsksmart/rif-material-ui`](https://github.com/rsksmart/rif-material-ui) for the look and feel


## Run for development

Install dependencies:

```
yarn
```

Test:

```
yarn test
```

Lint:

```
yarn lint
```

### Branching model

- `main` has latest release. Merge into `main` will deploy to npm. Do merge commits.
- Use branches pointing to `main` to add new PRs.
- Do external PRs against latest commit in `main`.
