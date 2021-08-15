package com.canada.aws.service;

import com.canada.aws.model.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    List<Category>getRootCategories();
}
