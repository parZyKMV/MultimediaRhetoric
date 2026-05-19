# Etapa 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copia y restaura dependencias
COPY ["MultimediaRhetoric/MultimediaRhetoric.csproj", "MultimediaRhetoric/"]
RUN dotnet restore "MultimediaRhetoric/MultimediaRhetoric.csproj"

# Copia todo y compila
COPY . .
WORKDIR "/src/MultimediaRhetoric"
RUN dotnet publish "MultimediaRhetoric.csproj" -c Release -o /app/publish

# Etapa 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Railway usa la variable PORT dinámicamente
ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE ${PORT}

ENTRYPOINT ["dotnet", "MultimediaRhetoric.dll"]
