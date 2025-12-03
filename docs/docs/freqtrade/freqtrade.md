

## 下载数据

docker compose run --rm freqtrade download-data --exchange binance --pairs BTC/USDT:USDT ETH/USDT:USDT ADA/USDT:USDT  DOT/USDT:USDT  LINK/USDT:USDT  BNB/USDT:USDT  XRP/USDT:USDT SOL/USDT:USDT  --timeframes 1h --days 180



## 回测

docker compose run --rm freqtrade backtesting --config user_data/config.json --strategy ContinuityStrategy --timerange 20250701-20251201 -i 1h > backtest.log 2>&1



## 部署文件

```yaml
services:
  freqtrade:
    image: freqtradeorg/freqtrade:stable
    restart: unless-stopped
    container_name: freqtrade
    volumes:
      - "./user_data:/freqtrade/user_data"
    ports:
      - "8080:8080"
    command: >
      trade
      --logfile /freqtrade/user_data/logs/freqtrade.log
      --db-url sqlite:////freqtrade/user_data/tradesv3.sqlite
      --config /freqtrade/user_data/config.json
      --strategy 自己的策略名字    
```

