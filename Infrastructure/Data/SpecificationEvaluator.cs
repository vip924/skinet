using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> spec)
        {
            var query = inputQuery;
            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria); // *** The where condition for the query. ***
            }
            if (spec.OrderBy != null)
            {
                query = query.OrderBy(spec.OrderBy); // *** The order by condition for the query. ***
            }
            if (spec.OrderByDescending != null)
            {
                query = query.OrderByDescending(spec.OrderByDescending); // *** The order by condition for the query. ***
            }
            if (spec.IsPagingEnabled)
            {
                query = query.Skip(spec.Skip).Take(spec.Take); // *** Query to skip and take the response data. ***
            }
            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));
            return query;
        }

    }
}