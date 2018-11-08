import { Component, OnInit, Inject } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Post } from '../../_models';

@Component({
  selector: 'blog-post-manage',
  templateUrl: './post-manage.component.html',
  styleUrls: ['./post-manage.component.scss']
})
export class PostManageComponent implements OnInit {

  postForm: FormGroup;

  get isViewing() {
    return this.data && !this.data.isUpdate;
  }

  get isUpdating() {
    return this.data && this.data.isUpdate;
  }

  get isCreating() {
    return !this.data;
  }

  get title() {
    if (this.isViewing) { return 'View post'; }
    if (this.isUpdating) { return 'Update post'; }
    if (this.isCreating) { return 'Create new post'; }
  }

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PostManageComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { post: Post, isUpdate: boolean }
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const post = this.data ? this.data.post : null;
    this.postForm = this.fb.group({
      id: [post ? post.id : ''],
      url: [post ? post.url : '', Validators.required],
      title: [post ? post.title : '', Validators.required],
      publishTime: [post ? new Date(post.publishTime) : '', Validators.required],
      tags: [post ? post.tags : []],
      author: [post ? post.author : ''],
      content: [post ? post.content : '']
    });
  }

  onCreatePost(post: Post) {
    this.postService.onCreatePost(post);
  }

  onUpdatePost(post: Post) {
    this.postService.onEditPost(post);
  }

  onFormSubmission() {
    if (this.postForm.valid) {
      const post = this.postForm.value;
      post.publishTime = post.publishTime.getTime();

      if (this.isCreating) {
        this.onCreatePost(post);
      } else if (this.isUpdating) {
        this.onUpdatePost(post);
      }
      this.dialogRef.close();
    }
  }

}
