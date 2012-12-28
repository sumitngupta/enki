module Admin::NavigationHelper
  def nav_link_to(text, url, options)
    options.merge!(:class => 'active') if url == request.fullpath
    content_tag(:li, link_to(text, url), options)
  end
end
