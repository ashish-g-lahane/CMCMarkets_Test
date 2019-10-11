using System;
using System.Collections.Generic;
using System.Text;

namespace ProductsStoreLib.Services
{
    public class ShippingCostService : IShippingCostService
    {
        public int GetShippingCost(int orderCost)
        {
	    if (orderCost == 0)
		return 0;

            return orderCost > 50 ? 20 : 10;
        }
    }
}
