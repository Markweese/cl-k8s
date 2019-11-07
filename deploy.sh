docker build -t markweldonbrewer/cl-client:latest -t markweldonbrewer/cl-client:$SHA -f ./client/Dockerfile ./client
docker build -t markweldonbrewer/cl-server:latest -t markweldonbrewer/cl-server:$SHA -f ./server/Dockerfile ./server

docker push markweldonbrewer/cl-client:latest
docker push markweldonbrewer/cl-client:$SHA

docker push markweldonbrewer/cl-server:latest
docker push markweldonbrewer/cl-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=markweldonbrewer/cl-client:$SHA
kubectl set image deployments/server-deployment server=markweldonbrewer/cl-server:$SHA
