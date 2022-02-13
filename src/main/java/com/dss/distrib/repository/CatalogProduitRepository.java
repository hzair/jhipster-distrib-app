package com.dss.distrib.repository;

import com.dss.distrib.domain.CatalogProduit;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CatalogProduit entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CatalogProduitRepository extends JpaRepository<CatalogProduit, Long> {}
