# NestJS Demo Projesi

Bu repo, NestJS ile geliştirilmiş bir web API'sinin demolarını içermektedir. NestJS, Node.js kullanarak ölçeklenebilir ve verimli sunucu tarafı uygulamaları oluşturmak için bir framework'tür. Bu proje ise, NestJS'in nasıl kullanıldığını göstermek için oluşturulmuş bir örnektir.

## Başlarken

Projeyi yerel makinenize kurmadan önce aşağıdaki adımları izlemeniz önerilir:

1. Repo'yu klonlayın:
```
git clone https://github.com/HBuminY/nestjs_demo_project.git
```
2. Nest.js Proje Root Dosyasını açın
```
cd nestjs_demo
```
3. Gerekli bağımlılıkları yükleyin:
```
npm install
```

4. Projeyi çalıştırın:
```
npm run start
```

## Nasıl Kullanılır

Demo projesinin özelliklerini denemek ve anlamak için aşağıdaki adımları izleyebilirsiniz:

1. Tarayıcınızda `http://localhost:3000` adresine gidin.

2. `/users` endpoint'ine GET isteği göndererek kullanıcıları elde edin:
```
GET http://localhost:3000/users
```

3. `/users` endpoint'ine POST isteği göndererek yeni bir kullanıcı ekleyin:
```
POST http://localhost:3000/users
{
“name”: “John Doe”,
“email”: “john@example.com”
}
```

4. Diğer özniteliklerin nasıl kullanılacağını ve API'nin diğer endpoint'leri hakkında daha fazla bilgi edinmek için `controllers` ve `services` klasörlerindeki ilgili dosyalara bakın.

## Katkılar ve Lisans

Her türlü katkıya açığız! Eğer bu projeye katkıda bulunmak isterseniz, lütfen repo sahibi ile iletişime geçin ve ne tür katkılar yapabileceğinizi tartışın.

Bu proje [MIT Lisansı](LISANS) altında lisanslanmıştır. Detaylı bilgi için lisans dosyasını inceleyebilirsiniz.

---

Bu README dosyası, NestJS demo projesi için açıklamalar ve talimatlar içermektedir. Proje hakkında daha fazla bilgi için lütfen [repo](https://github.com/HBuminY/nestjs_demo_project) sayfasını ziyaret edin.
