# Contributing Guidelines

## Summary

- [Message Format](#message-format)
- [Message Types](#message-types)
- [Message Scope](#message-scope)
- [Message Subject](#message-subject)
- [Message Body](#message-body)
- [Branches](#branches)
- [Fetching](#fetching)
- [Pull Request](#pull-request)
- [Merging](#mergin)
- [Code Guideline](#code-guideline)

This is the standard for our commits messages. We use this standard to easily identify and differentiate each type of commit. This pattern is aimed at writing better and more understandable messages.

## Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

> Obs: prefer to use git commit to make bigger commit message.

## Message Types

These are the types of commits we can use.

- `feat` New features
- `fix` Bug fixes
- `docs` Documentation Changes
- `lint` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor` A code change that neither fixes a bug nor adds a feature
- `test` Adding missing tests
- `chore` Changes to the build process or auxiliary tools and libraries such as documentation generation
- `revert` revert previous commit (hope not use this)

> we also provide `wip` type, but commits with `wip` type, should be rewrited using rebase when open a pull request

## Message Scope

The message scope refers to the part of the code you're intending to change, for instance:

```
git commit -m 'feat(form): add new radio button component
```

In the example above the changes are related to our `Form` component.

## Message Subject
The subject contains a brief description of the changes:

- use the imperative, present tense: "change" not "changed" nor "changes"
- no dot (.) at the end

## Message Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the changes and contrast this with previous behavior.

## Branches

Always work inside a feature branch. Branch name should be based on our types, for example:

```
git checkout -b feat/new-radio-component

git checkout -b fix/radio-component

git checkout -b test/radio-component

git checkout -b refactor/radio-component

```

## Fetching

Prefer to use `git pull --rebase` to update you local branch

## Pull Request

New pull requests should follow this structure:

1. Work on a fork
2. Create a new branch based on the [branch guideline](#branches)
3. Write the code based on our [code guideline](#code-guideline)
4. If the feature involves JavaScript, be sure to unit test the feature.
5. The coverage should not be lowered.  
6. Be sure to rebase your branch with the origin/master branch.
7. If the feature involves directly layout, be sure to provide some visual info of it.
8. The name of the pull request should match the name of the branch.

## Merging

Using this approach to merge branch when pull request is approved.

```
git fetch origin

# from feature branch
# use -i (interactively) to review your commits, rewrite, edit then
git rebase -i origin/develop

# We need to use -f because we did a rebase
git push origin feat/new-radio-component -f

# move to master branch
git checkout master

# use --ff-only to remove automatic merge message
git merge --ff-only feat/new-radio-component

```

## Code Guideline

### JavaScript
Check our [.eslintrc file](https://github.com/leroy-merlin-br/garden/blob/master/.eslintrc) for more info on our rules

#### Testing
You should write your tests following the structure below:

```javascript
describe('ComponentName', () => {
  describe('@instanceMethod', () => {
    context('when something happens ', () => {
      // Note that contexts are not always necessary
      it('should do something', () => {})
    })
  })
})
```

Note that we use `@` to describe instance methods and the words `when` and `should` to describe contexts and examples, respectively.  

You should try to always write tests in a descriptive manner, so everyone that reads them does not need to check the implementation for that method in order to understand what is its responsibility.

Also, it is important to note that all use cases must be tested. For instance, if you have a logic that depends on a boolean value you should verify what the method is doing when that value is true and also when that same value is false.

### CSS

Check our [.stylelintrc file](https://github.com/leroy-merlin-br/garden/blob/master/.stylelintrc) for more info on our rules

--

Our commit guidelines are based on:

> - [Angular commit pattern](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
> - [Thoughtbot Git Guide](https://github.com/thoughtbot/guides/tree/master/protocol/git)
> - [5 Useful tips for a better commit message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message)
