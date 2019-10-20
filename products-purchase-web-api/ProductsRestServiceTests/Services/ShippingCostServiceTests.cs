using Moq;
using NUnit.Framework;
using ProductsStoreLib.Services;
using System;

namespace ProductsRestServiceTests.Services
{
    [TestFixture]
    public class ShippingCostServiceTests
    {
        private ShippingCostService CreateService()
        {
            return new ShippingCostService();
        }

        [Test]
        public void GetShippingCost_OrderCost0_ShippingCost0()
        {
            // Arrange
            var service = this.CreateService();
            int orderCost = 0;

            // Act
            var result = service.GetShippingCost(orderCost);

            // Assert
            Assert.AreEqual(result, 0);
        }

        [Test]
        public void GetShippingCost_OrderCostUpto50_ShippingCost10()
        {
            // Arrange
            var service = this.CreateService();
            int orderCost = 10;

            // Act
            var result = service.GetShippingCost(orderCost);

            // Assert
            Assert.AreEqual(result, 10);
        }

        [Test]
        public void GetShippingCost_OrderCost50_ShippingCost10()
        {
            // Arrange
            var service = this.CreateService();
            int orderCost = 50;

            // Act
            var result = service.GetShippingCost(orderCost);

            // Assert
            Assert.AreEqual(result, 10);
        }

        [Test]
        public void GetShippingCost_OrderCostAbove50_ShippingCost20()
        {
            // Arrange
            var service = this.CreateService();
            int orderCost = 55;

            // Act
            var result = service.GetShippingCost(orderCost);

            // Assert
            Assert.AreEqual(result, 20);
        }
    }
}
