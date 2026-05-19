# Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /src

COPY ["MultimediaRhetoric/MultimediaRhetoric.csproj", "MultimediaRhetoric/"]
RUN dotnet restore "MultimediaRhetoric/MultimediaRhetoric.csproj"

COPY . .
WORKDIR "/src/MultimediaRhetoric"
RUN dotnet publish "MultimediaRhetoric.csproj" -c Release -o /app/publish

# Etapa 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE ${PORT}

ENTRYPOINT ["dotnet", "MultimediaRhetoric.dll"]
