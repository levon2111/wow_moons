import matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';
import {SingleArticle, SingleService} from "../../../types";

export async function getAllPosts() {
  return Promise.all(getAllPostsSlugs().map(getSinglePost));
}

export function getAllPostsSlugs() {
  return fs.readdirSync(getPostsDirectory()).map(normalizePostName);
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}

export async function getSinglePost(slug: string): Promise<SingleArticle> {
  const filePath = path.join(getPostsDirectory(), slug + '.mdx');
  const contents = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(contents);

  return { slug, content, meta: meta as SingleArticle['meta'] };
}

export function getPostsDirectory() {
  let basePath = process.cwd();
  return path.join(basePath, 'content', 'posts');
}

export async function getAllCaseStudies() {
  return Promise.all(getAllCaseStudiesSlugs().map(getSingleCaseStudy));
}

export function getAllCaseStudiesSlugs() {
  return fs.readdirSync(getCaseStudiesDirectory()).map(normalizeCaseStudyName);
}

function normalizeCaseStudyName(caseStudyName: string) {
  return caseStudyName.replace('.mdx', '');
}

export async function getSingleCaseStudy(slug: string): Promise<SingleArticle> {
  const filePath = path.join(getCaseStudiesDirectory(), slug + '.mdx');
  const contents = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(contents);

  return { slug, content, meta: meta as SingleArticle['meta'] };
}

export function getCaseStudiesDirectory() {
  let basePath = process.cwd();
  return path.join(basePath, 'content', 'caseStudies');
}

export async function getAllServices() {
  return Promise.all(getAllServicesSlugs().map(getSingleService));
}

export function getAllServicesSlugs() {
  return fs.readdirSync(getServicesDirectory()).map(normalizeServiceName);
}

function normalizeServiceName(serviceName: string) {
  return serviceName.replace('.mdx', '');
}

export async function getSingleService(slug: string): Promise<SingleService> {
  const filePath = path.join(getServicesDirectory(), slug + '.mdx');
  const contents = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(contents);

  return { slug, content, meta: meta as SingleService['meta'] };
}

export function getServicesDirectory() {
  let basePath = process.cwd();
  return path.join(basePath, 'content', 'services');
}
