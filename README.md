# 13.4.6-canary.2 Issue

## Repro

1. npm install
2. npm run dev
3. Go to [localhost:3000](http://localhost:3000)
4. Notice error: `_libsql_isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__.Headers is not a constructor`
5. Downgrade to next from 13.4.6-canary.2 to 13.4.6-canary.0
6. Go to [localhost:3000](http://localhost:3000)
7. Notice there's no error (request will timeout b/c db url is invalid)

NOTE: Something was introduced in canary.1 or canary.2 that caused this error
