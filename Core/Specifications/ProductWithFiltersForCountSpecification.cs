using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams productParams)
        : base(x => 
        (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
        (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) && // *** || is or-else expression a || b means if a is true expression a is taken else if b is true expression b is taken. *** 
        (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)) // *** base will call the base class constructor and add the condition to Criteria. ***
        {

        }
    }
}