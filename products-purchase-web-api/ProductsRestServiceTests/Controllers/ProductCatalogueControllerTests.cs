using Moq;
using NUnit.Framework;
using ProductsRestService.Controllers;
using ProductsStoreLib;
using ProductsStoreLib.DomainObjects;

namespace ProductsRestServiceTests.Controllers
{
    [TestFixture]
    public class ProductCatalogueControllerTests
    {
        private MockRepository mockRepository;

        private Mock<IProductsCatalogueService> mockProductsCatalogueService;

        [SetUp]
        public void SetUp()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockProductsCatalogueService = this.mockRepository.Create<IProductsCatalogueService>();
        }

        [TearDown]
        public void TearDown()
        {
            this.mockRepository.VerifyAll();
        }

        private ProductCatalogueController CreateProductCatalogueController()
        {
            return new ProductCatalogueController(this.mockProductsCatalogueService.Object);
        }

        [Test]
        public void GetProducts_CallsProdCatSvc_ReturnsWHatProdCatSvcReturns()
        {
            var products = new Product[] {
                new Product(1, "Test Prod 1", "Test Prod 1 desc", 30),
                new Product(2, "Test Prod 2", "Test Prod 2 desc", 40),
            };

            this.mockProductsCatalogueService.Setup(m => m.GetProducts()).Returns(products);

            // Arrange
            var productCatalogueController = this.CreateProductCatalogueController();

            // Act
            var result = productCatalogueController.GetProducts();

            // Assert
            Assert.AreEqual(products, result);
        }
    }
}
