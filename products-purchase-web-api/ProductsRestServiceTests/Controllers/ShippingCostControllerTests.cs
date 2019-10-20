using Moq;
using NUnit.Framework;
using ProductsRestService.Controllers;
using ProductsStoreLib.Services;
using System;

namespace ProductsRestServiceTests.Controllers
{
    [TestFixture]
    public class ShippingCostControllerTests
    {
        private MockRepository mockRepository;

        private Mock<IShippingCostService> mockShippingCostService;

        [SetUp]
        public void SetUp()
        {
            this.mockRepository = new MockRepository(MockBehavior.Strict);

            this.mockShippingCostService = this.mockRepository.Create<IShippingCostService>();
        }

        [TearDown]
        public void TearDown()
        {
            this.mockRepository.VerifyAll();
        }

        private ShippingCostController CreateShippingCostController()
        {
            return new ShippingCostController(this.mockShippingCostService.Object);
        }

        [Test]
        public void GetShippingCost_CallsShippingCostService_ReturnsWhatShippingCostSvcReturns()
        {
            int orderCost = 60, shippingCost = 20, fwdedInputToSvc = -1;

            this.mockShippingCostService.Setup(m => m.GetShippingCost(orderCost)).Callback<int>(ip => fwdedInputToSvc = (int)ip).Returns(shippingCost);

            // Arrange
            var shippingCostController = this.CreateShippingCostController();


            // Act
            var result = shippingCostController.GetShippingCost(orderCost);

            // Assert
            Assert.AreEqual(orderCost, fwdedInputToSvc);
            Assert.AreEqual(result, shippingCost);
        }
    }
}
