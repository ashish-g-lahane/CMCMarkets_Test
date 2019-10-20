using NUnit.Framework;
using ProductsStoreLib.DomainObjects;
using ProductsStoreLib.Services;

namespace ProductsRestServiceTests.Services
{
    [TestFixture]
    public class PlaceOrderServiceTests
    {
        private PlaceOrderService CreateService()
        {
            return new PlaceOrderService();
        }

        [Test]
        public void PlaceOrder_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var service = this.CreateService();
            var products = new Product[] {
                new Product(1, "Test Prod 1", "Test Prod 1 desc", 30),
                new Product(2, "Test Prod 2", "Test Prod 2 desc", 40),
            };

            // Act
            var result = service.PlaceOrder(products);

            // Assert
            Assert.IsTrue(result);
        }
    }
}
