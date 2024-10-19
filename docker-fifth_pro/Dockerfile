FROM python:3.9-slim-buster
WORKDIR /app
COPY req.txt .
RUN pip install --no-cache-dir -r req.txt
COPY . .
EXPOSE 5000
CMD [ "python" ,"app.py"]