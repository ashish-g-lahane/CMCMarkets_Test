using NUnit.Framework;
using ProductsStoreLib;

namespace ProductsRestServiceTests.Services
{
    [TestFixture]
    public class ProductsCatalogueServiceTests
    {        
        private ProductsCatalogueService CreateService()
        {
            return new ProductsCatalogueService();
        }

        [Test]
        public void GetProducts_DefaultCall_ReturnsProdList()
        {
            // Arrange
            var service = this.CreateService();

            // Act
            var result = service.GetProducts();

            // Assert
            Assert.NotNull(result);
            Assert.IsTrue(result.Length > 0);
        }
    }
}
