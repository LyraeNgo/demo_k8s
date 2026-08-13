# Cài thư viện
python -m pip install `
  opentelemetry-api `
  opentelemetry-sdk `
  opentelemetry-exporter-otlp `
  opentelemetry-distro `
  opentelemetry-instrumentation `
  opentelemetry-instrumentation-fastapi



# Chạy Lệnh auto instrucmentation
opentelemetry-instrument `
  --traces_exporter otlp `
  --metrics_exporter otlp `
  --logs_exporter otlp `
  uvicorn app.main:app --host 0.0.0.0 --port 8000