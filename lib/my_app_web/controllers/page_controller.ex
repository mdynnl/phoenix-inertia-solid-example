defmodule MyAppWeb.PageController do
  use MyAppWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end

  def dashboard(conn, _params) do
    conn
    |> assign_prop(:text, "Hello world")
    |> render_inertia("Dashboard")
  end

  def about(conn, _params) do
    conn
    |> assign_prop(:text, "Hello world")
    |> render_inertia("About")
  end
end
