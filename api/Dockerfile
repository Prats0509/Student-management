FROM mcr.microsoft.com/dotnet/sdk:9.0 as build
WORKDIR /src
ENV PATH = "$PATH:/root/.dotnet/tools"

COPY *.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 as runtime

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 5123

ENTRYPOINT ["sh", "-c", "dotnet api.dll"]