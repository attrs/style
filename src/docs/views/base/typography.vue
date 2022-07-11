<template>
  <div class="container p-pg mx-auto">
    <div class="pb-md border-b">
      <div class="flex items-center">
        <div class="x-iconbox x-iconbox-lg radius-circle mr-2 border text-active">
          <svg class="icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z"></path></svg>
        </div>

        <div class="ml-5">
          <h3>Typography</h3>
          <p class="text-light">Typography examples</p>
        </div>
      </div>
    </div>

    <h4 class="mt-lg mb-sm">Headings</h4>
    <div class="mb-md">
      <div class="flex space-x-6">
        <div class="flex-1 bg-panel rounded border p-md">
          <h6 class="text-muted font-semibold">Heading</h6>
          <h1>
            Heading
            <small class="text-muted">H1</small>
          </h1>
          <h2>
            Heading
            <small class="text-muted">H2</small>
          </h2>
          <h3>
            Heading
            <small class="text-muted">H3</small>
          </h3>
          <h4>
            Heading
            <small class="text-muted">H4</small>
          </h4>
          <h5>
            Heading
            <small class="text-muted">H5</small>
          </h5>
          <h6>
            Heading
            <small class="text-muted">H6</small>
          </h6>
        </div>
        <div class="flex-1 bg-panel rounded border p-md">
          <h6 class="text-muted font-semibold">Display Heading</h6>

          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
          <h1 class="display-5">Display 5</h1>
          <h1 class="display-6">Display 6</h1>
        </div>
      </div>
    </div>

    <h4 class="mt-lg mb-sm">Paragraph</h4>
    <div class="my-md x-card">
      <div class="p-md">
        <h6 class="text-muted font-semibold">Paragraph</h6>

        <p>Lorem ipsum dolor sit amet, ad tibique blandit qui, error zril eleifend ut vel. Et paulo labores molestiae has, ei eos virtute dolorem.</p>

        <!-- Lead -->
        <p class="lead">Lorem ipsum dolor sit amet, ad tibique blandit qui, error zril eleifend ut vel. Et paulo labores molestiae has, ei eos virtute dolorem.</p>
      </div>

      <hr class="m-0" />

      <div class="p-md">
        <h6 class="text-muted font-semibold">Code</h6>

        <pre class="code">$ npm i @attrs/style --save-dev</pre>
      </div>
    </div>

    <h4 class="mt-lg mb-sm">Figure</h4>
    <div class="my-md x-card p-md">
      <h6 class="text-muted font-semibold">Figure</h6>

      <div class="grid grid-cols-3 gap-5">
        <figure>
          <div class="ratio-16by9 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" title="Image"></div>
          <figcaption>figcaption</figcaption>
        </figure>
        <figure>
          <div class="ratio-16by9 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/586031/pexels-photo-586031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" title="Image"></div>
          <figcaption>figcaption</figcaption>
        </figure>
        <figure>
          <div class="ratio-16by9 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" title="Image"></div>
          <figcaption>figcaption</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
