FROM python:3.7

EXPOSE 5000

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev && \
    apt-get install -y libbz2-dev && \
    apt-get install -y python3-dev && \
    apt-get install -y build-essential && \
    apt-get install -y postgresql-dev

ENTRYPOINT ["/bin/bash"]

