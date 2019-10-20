using Moq;
using NUnit.Framework;
using ProductsRestService.Controllers;
using ProductsStoreLib.DomainObjects;
using ProductsStoreLib.Services;

namespace ProductsRestServiceTests.Controllers
{
    [TestFixture]
    public class PlaceOrderControllerTests
    {
        private MockRepository mockRepository;

        private Mock<IPlaceOrderService> mockPlaceOrderService;

        [SetUp]
        public void SetUp()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockPlaceOrderService = this.mockRepository.Create<IPlaceOrderService>();
        }

        [TearDown]
        public void TearDown()
        {
            this.mockRepository.VerifyAll();
        }

        private PlaceOrderController CreatePlaceOrderController()
        {
            return new PlaceOrderController(this.mockPlaceOrderService.Object);
        }

        [Test]
        public void Place_StateUnderTest_ExpectedBehavior()
        {
            var products = new Product[] {
                new Product(1, "Test Prod 1", "Test Prod 1 desc", 30),
                new Product(2, "Test Prod 2", "Test Prod 2 desc", 40),
            };
            var returnFromSvc = true;
            Product[] fwdedInputToSvc = null;

            this.mockPlaceOrderService.Setup(m => m.PlaceOrder(products)).Callback<Product[]>(ip => fwdedInputToSvc = ip).Returns(returnFromSvc);

            // Arrange
            var placeOrderController = this.CreatePlaceOrderController();
            

            // Act
            var result = placeOrderController.Place(products);

            // Assert
            Assert.AreEqual(products, fwdedInputToSvc);
            Assert.AreEqual(result, returnFromSvc);
        }
    }
}
